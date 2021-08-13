import VultrNode from "@vultr/vultr-node";

const vultr = VultrNode.initialize({
  apiKey: process.env.VULTR_API_KEY,
});

vultr.account.getAccountInfo().then((response) => {
  console.log(response);
});
