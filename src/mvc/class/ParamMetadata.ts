/**
 * @module mvc
 */ /** */

import {IParamOptions} from "../interfaces";
import {NotEnumerable} from "../../core/decorators/enumerable";
import {nameOf} from "../../core/utils/index";
import {Type} from "../../core/interfaces/Type";
import {Storable} from "../../core/class/Storable";
/**
 *
 */
export class ParamMetadata extends Storable implements IParamOptions<any> {

    /**
     *
     */
    @NotEnumerable()
    protected _required: boolean;
    /**
     *
     */
    @NotEnumerable()
    protected _expression: string | RegExp;
    /**
     *
     * @type {boolean}
     */
    @NotEnumerable()
    protected _useConverter: boolean = true;

    /**
     *
     */
    @NotEnumerable()
    protected _service: string | Type<any> | symbol;

    constructor(protected _target, protected _propertyKey, protected _index) {
        super(_target, _propertyKey, _index);
    }

    /**
     *
     * @returns {boolean}
     */
    get required(): boolean {
        return this._required;
    }

    /**
     *
     * @param value
     */
    set required(value: boolean) {
        this._required = value;
    }

    /**
     *
     * @returns {string|RegExp}
     */
    get expression(): string | RegExp {
        return this._expression;
    }

    /**
     *
     * @param value
     */
    set expression(value: string | RegExp) {
        this._expression = value;
    }

    /**
     *
     * @returns {symbol}
     */
    get service(): Type<any> | symbol {
        return <any>this._service;
    }

    /**
     *
     * @param value
     */
    set service(value: Type<any> | symbol) {
        this._service = value;
        this.name = nameOf(value);
    }

    /**
     *
     * @param value
     */
    set useConverter(value: boolean) {
        this._useConverter = value;
    }

    /**
     *
     * @returns {boolean}
     */
    get useConverter(): boolean {
        return this._useConverter;
    }

    /**
     *
     * @returns {{service: (string|symbol), name: string, expression: string, required: boolean, use: undefined, baseType: undefined}}
     */
    toJSON() {

        return {
            service: nameOf(this._service),
            name: this.name,
            expression: this._expression,
            required: this._required,
            use: this.typeName,
            baseType: this.collectionName,
        };
    }
}