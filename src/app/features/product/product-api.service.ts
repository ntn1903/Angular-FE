import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUpdateProduct } from 'src/app/models/product/create-update-product.model';
import { GetProduct } from 'src/app/models/product/get-product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  private url = "Product";
  constructor(private http: HttpClient) { }

  getList(con: GetProduct): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${this.url}`, {
      params: { id: con.id, name: con.name }
    });
  }

  create(prod: CreateUpdateProduct): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/${this.url}`, prod);
  }

  update(prod: CreateUpdateProduct): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/${this.url}`, prod);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/${this.url}/` + id);
  }

  deleteMany(ids: number[]): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/${this.url}/deleteMany/`, { params: { ids: ids } });
  }

  // exportExcel(fileName: string): any {
  //   return this.http.get((`${environment.apiUrl}/${this.url}/exportExcel`), { responseType: 'blob' }).subscribe((blob: Blob) => {
  //     // saveAs(blob, fileName);
  //     const url = window.URL.createObjectURL(blob);
  //     var link = document.createElement('a');
  //     link.href = url;
  //     link.download = fileName;
  //     link.click();
  //   });
  // }
}
