module.exports = (sequelize, DataTypes) => {
    const modelsPostCategory = sequelize.define('PostCategory', {
        postId:{
            type: DataTypes.INTEGER,
        },
        categoryId: DataTypes.INTEGER,
    },
    {
        underscored: true,
        timestamps: false,
        tableName: 'posts_categories'
    });

    modelsPostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
            foreignKey: 'post_id',
            otherKey: 'category_id',
            as: 'categories', 
            through: modelsPostCategory,
        });

        models.Category.belongsToMany(models.BlogPost, {
            foreignKey: 'categoryId',
            as: 'blog_posts',
            otherKey: 'postId',
            through: modelsPostCategory,
        });
}
return modelsPostCategory;
}