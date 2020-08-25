import { useEffect } from "react";
import { emitter } from "../emitter";

/* eslint-disable react-hooks/exhaustive-deps */

export const useOn = (event, callback) => useEffect(() => emitter.on(event, callback), []);
