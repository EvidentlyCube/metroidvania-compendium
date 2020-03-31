export const FetchHelperFunctions = {
	getUniqueValues: function<TEntity, TField extends keyof TEntity>(values: Array<TEntity>, field: TField): Array<TEntity[TField]> {
		const set = new Set(values.map(x => x[field]));
		return Array.from(set.values());
	},
	mapValues: function<TEntity, TField extends keyof TEntity>(models: Array<TEntity>, field: TField): Map<TEntity[TField], TEntity> {
		const map: Map<TEntity[TField], TEntity> = new Map();
		models.forEach(model => map.set(model[field], model));
		return map;
	},
};
