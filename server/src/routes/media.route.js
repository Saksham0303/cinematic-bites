import express from "express";
import mediaController from "../axios/controllers/media.controller.js";

const router = express.router({ mergeParams: true });

router.get("/search", mediaController.search);

router.get("/genres, mediaController.getGenres");

router.get("/detail/:mediaId", mediaController.getDetail);

router.get("/mediaCategory", mediaController.getList);

export default router;