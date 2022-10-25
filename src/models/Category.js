module.exports = (sequelize, DataTypes) => {
    const modelsCategory = sequelize.define('Category', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: DataTypes.STRING,
    },
    {
        underscored: true,
        timestamps: false,
    });

   /*  usersTable.associate = (models) => {
        usersTable.belongsTo(models.post_categories, {
            foreignKey: 'category_id',
            as: 'posts_categories',
        });
} */
return modelsCategory;
}