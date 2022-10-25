const usersTable = (sequelize, DataTypes) => {
    const usersTable = sequelize.define('User', {
        id:DataTypes.INTEGER,
        displayName:DataTypes.STRING,
        email:DataTypes.STRING,
        password:DataTypes.STRING,
        image:DataTypes.STRING,
    },
    {
        underscored: true,
    });

    usersTable.associate = (models) => {
        usersTable.belongsTo(models.blog_posts, {
            foreignKey: 'user_id',
            as: 'blog_posts',
        })
    }
    return usersTable;
};
module.exports = usersTable;