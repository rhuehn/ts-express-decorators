# Override Send response

There is the current implementation of the [SendResponseMiddleware](/api/common/mvc/components/SendResponseMiddleware.md):

```typescript
@Middleware()
export class SendResponseMiddleware implements IMiddleware {

    constructor(private converterService: ConverterService) {

    }

    public use(@ResponseData() data: any, @Response() response: Express.Response) {

        if (response.headersSent) {
            return;
        }

        const type = typeof data;

        if (data === undefined) {
            response.send("");
        } else if (data === null || ["number", "boolean", "string"].indexOf(type) > -1) {
            response.send(String(data));
        } else {
            response.setHeader("Content-Type", "text/json");
            response.json(this.converterService.serialize(data));
        }

    }
}

```

But for some reason, this implementation isn't enough to meet your needs.

With [@OverrideMiddleware](/api/common/mvc/decorators/class/OverrideMiddleware.md) it's possible to change the default implementation like
this:


```typescript
@OverrideMiddleware(SendResponseMiddleware)
export class MySendResponseMiddleware extends SendResponseMiddleware {
 
    constructor(protected converterService: ConverterService) {
        super(converterService)
    }
    
    public use(@ResponseData() data: any, @Response() response: Express.Response) {
    
        // ... your instruction
    
    }
}
```

And that all!
