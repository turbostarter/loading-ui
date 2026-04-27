import { cache } from "react";

import { createQueryClient } from "./utils";

export const getQueryClient = cache(createQueryClient);
