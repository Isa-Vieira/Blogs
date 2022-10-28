module.exports = (sequelize, DataTypes) => {
    const modelsBlogPost = sequelize.define('BlogPost', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        title:DataTypes.STRING,
        content:DataTypes.STRING,
        userId:DataTypes.INTEGER,
        published:DataTypes.DATE,
        updated:DataTypes.DATE,
    },
    {

        underscored: true,
        timestamps: false,
      
    });

      modelsBlogPost.associate = (models) => {
        modelsBlogPost.belongsTo(models.User, {
            foreignKey: 'userId',
            as:'user',
        });
} 
return modelsBlogPost;
}