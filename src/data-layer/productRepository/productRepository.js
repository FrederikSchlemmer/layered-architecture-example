export class ProductRepository {

    getProductByName(name: String): Observable<ProductEntity> {
        return mapper.mapFrom(HTTPClient.get("api/getProduct/{name}"));
    };

    getAllProducts(): Observable<ProductEntity[]> {
        return mapper.mapFrom(HTTPClient.get("api/getAllProducts"));
    };
}