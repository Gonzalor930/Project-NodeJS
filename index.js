const BASE_URL = "https://fakestoreapi.com";

const [, , methodArg, resourceArg, ...extraArgs] = process.argv;

const method = methodArg?.toUpperCase();
const [resource, id] = (resourceArg ?? "").split("/");

async function request(path, options = {}) {
  const response = await fetch(`${BASE_URL}/${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  return response.json();
}

async function getAllProducts() {
  const products = await request("products");
  const list = products.map(({ id, title, price, category }) => ({
    id,
    title,
    price,
    category,
  }));
  console.log(list);
}

async function getProductById(productId) {
  const product = await request(`products/${productId}`);
  console.log(product);
}

async function createProduct(title, price, category) {
  const body = { title, price: Number(price), category };
  const created = await request("products", {
    method: "POST",
    body: JSON.stringify(body),
  });
  console.log(created);
}

async function deleteProduct(productId) {
  const deleted = await request(`products/${productId}`, { method: "DELETE" });
  console.log(deleted);
}

function printUsage() {
  console.log("Uso:");
  console.log("  npm run start GET products");
  console.log("  npm run start GET products/<productId>");
  console.log("  npm run start POST products <title> <price> <category>");
  console.log("  npm run start DELETE products/<productId>");
}

async function main() {
  if (!method || !resource) {
    printUsage();
    return;
  }

  if (resource !== "products") {
    throw new Error(`Recurso no soportado: "${resource}"`);
  }

  if (id && Number.isNaN(Number(id))) {
    throw new Error(`productId inválido: "${id}"`);
  }

  switch (method) {
    case "GET":
      return id ? getProductById(id) : getAllProducts();

    case "POST": {
      const [title, price, category] = extraArgs;
      if (!title || !price || !category) {
        throw new Error("POST requiere <title> <price> <category>");
      }
      return createProduct(title, price, category);
    }

    case "DELETE":
      if (!id) {
        throw new Error("DELETE requiere un productId: products/<productId>");
      }
      return deleteProduct(id);

    default:
      throw new Error(`Método no soportado: "${method}"`);
  }
}

main().catch((error) => {
  console.error("Error:", error.message);
  process.exitCode = 1;
});
