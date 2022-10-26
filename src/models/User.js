const usersTable = (sequelize, DataTypes) => {
    const usersTable = sequelize.define('User', {
        
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
        underscored: true,
        timestamps: false,
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