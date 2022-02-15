'use strict';
const { all } = require('express/lib/application');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Meet_Greet, Set_Time }) {
      Band.hasMany(Meet_Greet, {
        foreignKey: "band_id",
        as: "meet_greets"
      })

      Band.hasMany(Set_Time, {
        foreignKey: "band_id",
        as: "set_times"
      })
    }
  }
  Band.init({
    band_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    available_start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Band',
    tableName: "bands",
    timestamps: false
  });
  return Band;
};