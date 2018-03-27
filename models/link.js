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
    shortenedUrl: {
      type:DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'General'
    },
    totalClicks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    dailyClicks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    top500: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    shared: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
  // Link.hook("afterCreate", link => {

  //   link.top500 = ;
  // });
  Link.associate = function (models) {
    Link.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Link;
};