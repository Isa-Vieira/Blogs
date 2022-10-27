module.exports = (sequelize, DataTypes) => {
    const modelsCategory = sequelize.define('Category', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
    },
    {
        underscored: true,
        timestamps: false,
    });

     /* modelsCategory.associate = (models) => {
        modelsCategory.belongsTo(models.Category, {
            foreignKey: 'category_id',
            as: 'posts_categories',
        });
}  */
return modelsCategory;
}