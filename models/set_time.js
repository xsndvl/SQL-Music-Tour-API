'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set_Time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Band, Event, Stage }) {
      Set_Time.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })

      Set_Time.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })

      Set_Time.belongsTo(Stage, {
        foreignKey: "stage_id",
        as: "stage"
      })
    }
  }
  Set_Time.init({
    event_id: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    stage_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    band_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    start_time: {
    type: DataTypes.DATE,
    allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    set_time_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    sequelize,
    modelName: 'Set_Time',
    tableName: "set_times",
    timestamps: false
  });
  return Set_Time;
};