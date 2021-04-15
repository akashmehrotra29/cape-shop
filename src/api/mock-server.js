import { createServer, Model, RestSerializer } from "miragejs";
import faker from "faker";
faker.seed(123);

export default function setupMockServer() {
  createServer({
    serializers: {
      application: RestSerializer
    },
    models: {
      product: Model,
      cartitem: Model,
      wishlistitem: Model
    },

    routes() {
      this.namespace = "api";
      this.timing = 1000;

      this.get("/products", (schema, request) => {
        return schema.products.all();
      });

      this.get("/wishlistitems", (schema, request) => {
        return schema.wishlistitems.all();
      });

      this.post("/wishlistitems", (schema, request) => {
        let attrs = JSON.parse(request.requestBody).wishlistitem;
        return schema.wishlistitems.create(attrs);
      });

      this.del("/wishlistitems/:id", (schema, request) => {
        const productId = request.params.id;
        schema.wishlistitems.findBy({ productId: productId }).destroy();
        // schema.wishlistitems.find(id).destroy();
        return productId;
      });

      this.get("/cartitems", (schema, request) => {
        return schema.cartitems.all();
      });

      this.post("/cartitems", (schema, request) => {
        let attrs = JSON.parse(request.requestBody).cartitem;
        return schema.cartitems.create(attrs);
      });

      this.del("/cartitems/:id", (schema, request) => {
        const productId = request.params.id;
        schema.cartitems.findBy({ productId: productId }).destroy();
        return productId;
      });

      this.patch("/cartitems/:id", (schema, request) => {
        const productId = request.params.id;
        let attrs = JSON.parse(request.requestBody).cartitem;
        return schema.cartitems.findBy({ productId: productId }).update(attrs);
      });
    },

    seeds(server) {
      [...Array(50)].forEach((_) => {
        server.create("product", {
          productId: faker.datatype.uuid(),
          name: faker.commerce.productName(),
          image: faker.random.image(),
          price: faker.commerce.price(),
          material: faker.commerce.productMaterial(),
          brand: faker.lorem.word(),
          inStock: faker.datatype.boolean(),
          fastDelivery: faker.datatype.boolean(),
          ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
          offer: faker.random.arrayElement([
            "Save 50",
            "70% bonanza",
            "Republic Day Sale"
          ]),
          idealFor: faker.random.arrayElement([
            "Men",
            "Women",
            "Girl",
            "Boy",
            "Senior"
          ]),
          level: faker.random.arrayElement([
            "beginner",
            "amateur",
            "intermediate",
            "advanced",
            "professional"
          ]),
          color: faker.commerce.color()
        });
      });
    }
  });
}
