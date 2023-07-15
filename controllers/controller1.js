const express = require("express");
const Task = require("../database/taskschema");
const try_catchWrapper = require("../middleware/try_catch");

const newController = try_catchWrapper(async (req, res, next) => {
  const task = await Task.find();
  res.json(task);
});

const newControllerpost = try_catchWrapper(async (req, res, next) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const newControllerDelete = try_catchWrapper(async (req, res, next) => {
  const task = req.params.id;
  const find = await Task.findOneAndDelete({ name: task });

  if (!find) {
    return res.status(404).json({ msg: "No name" });
  }

  res.status(202).json({ task });
});

const newControllerPatch = try_catchWrapper(async (req, res, next) => {
  const task = req.params.id;
  const find = await Task.findOneAndUpdate({ name: task }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!find) {
    return res.status(404).json({ msg: "No name" });
  }

  res.status(202).json({ find });
});
module.exports = {
  newController,
  newControllerpost,
  newControllerDelete,
  newControllerPatch,
};
