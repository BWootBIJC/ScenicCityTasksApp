import {createContext, ReactNode} from "react";
import {ServiceProvider} from "./ServiceProvider";
import {IServiceCollection} from "./IServiceCollection";


export const ServiceCollectionContext = createContext<IServiceCollection>(ServiceProvider.getInstance().getServiceCollection());

type ServiceCollectionProviderProps = {
    children: ReactNode;
}

export const ServiceCollectionProvider = ({ children }: ServiceCollectionProviderProps) => {
    return (
        <ServiceCollectionContext.Provider value={ServiceProvider.getInstance().getServiceCollection()}>
            {children}
        </ServiceCollectionContext.Provider>
    )
}