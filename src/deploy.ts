import { createInstance } from "./api";
import { getEnv } from "./common";

const createPullRequestBuild = async () => {
  const id = Number(getEnv("PULL_REQUEST_ID"));
  const props = getEnv("VULTR_INSTANCE_(.*)");

  try {
    const instance = await createInstance({
      ...props,
      app_id: Number(props.app_id),
      hostname: `${id}.${props.domain}`,
      label: `${id}.${props.domain}`,
      user_data: Buffer.from(props.app_id).toString("base64"),
    });

    console.log(instance);
  } catch (err) {
    console.error(err);
  }
};

createPullRequestBuild();
