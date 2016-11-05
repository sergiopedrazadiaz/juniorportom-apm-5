import {Injectable} from "@angular/core";
import {Product} from "../model/product";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ProductService {

    private productsURI = 'http://138.68.0.83:7070/api/v1/product';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getProducts(): Observable<Product[]> {
        const url = `${this.productsURI}/list`;
        return this.http.get(url)
            .map(response => {response; console.log("Esta es la respuesta: " + response)})
            .catch(this.handleError);
    }

    update(product: Product): Observable<Product> {
        const url = `${this.productsURI}/${product.id}`;
        return this.http
            .put(url, JSON.stringify(product), {headers: this.headers})
            .map(() => product)
            .catch(this.handleError);
    }

    create(name: string): Observable<Product> {

        return this.http
            .post(this.productsURI, JSON.stringify({name: name}), {headers: this.headers})
            .map(res => res.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.throw(error.message || error);
    }
}