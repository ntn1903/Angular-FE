import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUpdateCategory } from 'src/app/models/category/create-update-category.model';
import { GetCategoryDto } from 'src/app/models/category/get-category-dto.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryApiService {
  private url = "Category";
  constructor(private http: HttpClient) { }

  getList(con: GetCategoryDto): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${this.url}`, {
      params: { id: con.id, name: con.name }
    });
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${this.url}/getCategories`);
  }

  create(category: CreateUpdateCategory): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/${this.url}`, category);
  }

  update(category: CreateUpdateCategory): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/${this.url}`, category);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/${this.url}/` + id);
  }

  deleteMany(ids: number[]): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/${this.url}/deleteMany/`, { params: { ids: ids } });
  }

  exportExcel(fileName: string): any {
    return this.http.get((`${environment.apiUrl}/${this.url}/exportExcel`), { responseType: 'blob' }).subscribe((blob: Blob) => {
      // saveAs(blob, fileName);
      const url = window.URL.createObjectURL(blob);
      var link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      link.click();
    });
  }
}
