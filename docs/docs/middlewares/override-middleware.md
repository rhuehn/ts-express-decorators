# Override a Middleware

The decorator [@OverrideMiddleware](/api/common/mvc/decorators/class/OverrideMiddleware.md) gives you the ability to
override some internal Ts.ED middlewares.

> All Ts.ED middlewares can be overrided. You can find the complete list [here](/api/index.md?query=keywords_Middleware|type_class).

## Usage

```typescript
import {OriginalMiddlware, OverrideMiddleware} from "@tsed/common";

@OverrideMiddleware(OriginalMiddlware)
export class CustomMiddleware extends OriginalMiddlware {
    public use() {
        
    }
}
```

## Examples

* [Send response](/docs/middlewares/override/send-response.md)
* [Authentication](/docs/middlewares/override/authentication.md)
* [Response view](/docs/middlewares/override/response-view.md)
* [Global error handler](/docs/middlewares/override/global-error-handler.md)

