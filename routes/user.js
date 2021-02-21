import { base } from "~/routes/entrypoint";

export const getPostUser = (id) => base.get(`users/${id}/`)

    