// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Component = sequelize.define('component', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    data: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    type: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'component',
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Component.associate = (models) => {
    Component.belongsTo(models.entity, {
      foreignKey: {
        name: 'entityIdKey',
        field: 'entityId',
      },
      as: 'entity',
    });
    Component.belongsToMany(models.staticResource, {
      through: 'staticResourceComponent',
      foreignKey: 'componentId',
      otherKey: 'staticResourceId',
      as: 'staticResourceThroughStaticResourceComponents',
    });
  };

  return Component;
};
