require('../models/Category');
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
    });

    modelsPostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
            foreignKey: 'post_id',
            otherKey: 'category_id',
            as: 'categories',
            through: modelsPostCategory,
        });

        models.Category.belongsToMany(models.BlogPost, {
            foreignKey: 'category_id',
            as: 'blog_post',
            outherKey: 'post_id',
            through: modelsPostCategory,
        });
}
return modelsPostCategory;
}