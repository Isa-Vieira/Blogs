const usersTable = (sequelize, DataTypes) => {
    const usersTable = sequelize.define('User', {
        type:DataTypes.INTEGER,
        primaryKey: true,
        
        //id:DataTypes.INTEGER,
        //primaryKey: true,
        //displayName:DataTypes.STRING,
        //email:DataTypes.STRING,
        //password:DataTypes.STRING,
        //image:DataTypes.STRING,
    },
    {
        underscored: true,
    });

        usersTable.associate = (models) => {
        usersTable.hasMany(models.BlogPost, {
            foreignKey: 'id',
            as:'blog_posts',
        });
    }
    return usersTable;
};
module.exports = usersTable;