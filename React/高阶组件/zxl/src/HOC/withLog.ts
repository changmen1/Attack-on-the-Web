import React, { useEffect } from "react";
import { formatDate } from "../utils/tools";

export function withLog<T extends object>(
    WrappedComponent: React.ComponentType<T>
) {
    const NewCom = (props: T) => {
        useEffect(() => {
            console.log(
                `日志：组件 ${WrappedComponent.name} 已创建，创建时间 ${formatDate(Date.now(), "year-time")}`
            );
            return () => {
                console.log(
                    `日志：组件 ${WrappedComponent.name} 已销毁，销毁时间 ${formatDate(Date.now(), "year-time")}`
                );
            };
        }, []);

        return React.createElement(WrappedComponent, props);
    };
    return NewCom;
}
