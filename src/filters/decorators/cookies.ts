/**
 * @module filters
 */ /** */

import {Type} from "../../core/interfaces/Type";
import {CookiesFilter} from "../components/CookiesFilter";
import {ParamRegistry} from "../../mvc/registries/ParamRegistry";
/**
 *
 * @param expression
 * @param useType
 * @returns {function(Function, (string|symbol), number): void}
 * @decorator
 */
export function CookiesParams(expression?: string | any, useType?: any): Function {

    return <T>(target: Type<T>, propertyKey: string | symbol, parameterIndex: number): void => {

        if (typeof parameterIndex === "number") {

            ParamRegistry.useFilter(CookiesFilter, {
                target,
                propertyKey,
                parameterIndex,
                expression,
                useType
            });

        }

    };
}
/**
 *
 * @param expression
 * @param useType
 * @returns {function(Function, (string|symbol), number): void}
 * @decorator
 */
export function Cookies(expression?: string | any, useType?: any): Function {
    return CookiesParams(expression, useType);
}

