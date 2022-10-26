const usersTable = (sequelize, DataTypes) => {
    const usersTables = sequelize.define('User', {
        
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,

        },
        displayName:DataTypes.STRING,
        email:DataTypes.STRING,
        password:DataTypes.STRING,
        image:DataTypes.STRING,
    },
    {
        tableName: 'users',
        underscored: true,
        timestamps: false,
    });

        usersTables.associate = (models) => {
        usersTables.hasMany(models.BlogPost, {
            foreignKey: 'id',
            as:'blog_posts',
        });

    }
    return usersTables;
};
module.exports = usersTable;