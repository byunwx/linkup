module.exports = (sequelize, DataTypes) => {
  const Link = sequelize.define("Link", {
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
    discription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    totalclickedcount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    dailyclickcount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    majorsite: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    share: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });

  Link.associate = models => {
    // We're saying that a link should belong to an user
    // A link can't be created without an user due to the foreign key constraint
    Link.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Link;
};