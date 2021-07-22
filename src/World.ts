class World<ResourceTypes> {
    private resources: Record<string, ResourceTypes> = {};
    constructor() {}

    addResources = (value: ResourceTypes) => {
        const key = value.constructor.name;
        this.resources[key] = value;
    };

    getResources: (key: Function) => ResourceTypes = (key) => {
        return this.resources[key.name];
    };
}

export default World;
