import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUpdateSupplier } from 'src/app/models/supplier/create-update-supplier.model';
import { GetSupplierDto } from 'src/app/models/supplier/get-supplier-dto.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupplierApiService {
  private url = "Supplier";
  constructor(private http: HttpClient) { }

  getList(con: GetSupplierDto): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${this.url}`, {
      params: {}
    });
  }

  getSuppliers(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${this.url}/getSuppliers`);
  }

  create(supllier: CreateUpdateSupplier): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/${this.url}`, supllier);
  }

  update(supllier: CreateUpdateSupplier): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/${this.url}`, supllier);
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
