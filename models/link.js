module.exports = function(sequelize, DataTypes) {
  var Link = sequelize.define("Link", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    discription:{
      type: DataTypes.TEXT,
      allowNull: true
    },
    totalclickedcount:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    dailyclickcount:{
      type: DataTypes.INTEGER,
      allowNull:false,
      defaultValue: 0
    },
    majorsite:{
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: false
    }
  });

  Post.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Post.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Link;
};
