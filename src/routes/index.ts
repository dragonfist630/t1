import { Router, Request, Response } from "express";
import { trainModel } from "src/models/train";

const router = Router();

router.post("/add", async (req: Request, res: Response) => {
  const { train_no, train_name, source, destination, fare, availability } = req.body;
  const resp = await trainModel.create({ train_no, train_name, source, destination, fare, availability });
  return res.status(200).send(resp);
});

router.get("/check", async (_, res) => {
  try {
    const results = await trainModel.find();
    if (!results) {
      console.log("No data found");
      res.status(404).send("No data found");
    } else {
      console.log("Train data found successfully");
      res.json(results);
    }
  } catch (error) {
    console.log("Error Occured while finding train record", error);
    res.status(500).send("Issue Occurred at Server Side While Finding train record");
  }
});

router.get("/checkUser/:id", async (req, res) => {
  try {
    const result = await trainModel.findById(req.params.id);
    if (!result) {
      console.log("No data found");
      res.status(404).send("No data found");
    } else {
      console.log("Train data found successfully");
      res.status(200).json(result);
    }
  } catch (error) {
    console.log("Error Occured while finding train record", error);
    res.status(500).send("Issue Occurred at Server Side While Finding train record");
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const recordUpdates = Object.keys(req.body);
    const record = await trainModel.findById(req.params.id);
    recordUpdates.forEach(recordUpdate => (record[recordUpdate] = req.body[recordUpdate]));
    await record.save();

    if (!record) {
      console.log("No record found with such id. Wrong ID");
      res.status(400).send("NO record found with such id. Wrong ID");
    } else {
      console.log("Successfully updated the record info");
      res.status(200).send("Successfully updated the record info");
    }
  } catch (error) {
    console.log("Error while updating the record", error);
    res.status(400).send("Error while updating the record");
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedTrainRecord = await trainModel.findByIdAndDelete(req.params.id);

    if (!deletedTrainRecord) {
      console.log("No such train found");
      res.status(404).send("No such train found. You had entered invalid id");
    } else {
      console.log("Train record deleted successfully");
      res.status(200).send("Train record deleted successfully");
    }
  } catch (error) {
    console.log("Error Occurred while deleting train record");
    res.status(500).send("Error Occurred while deleting record");
  }
});

export { router };
