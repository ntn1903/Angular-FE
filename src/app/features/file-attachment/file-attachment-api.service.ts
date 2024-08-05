import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUpdateFileAttachment } from 'src/app/models/file-attachment/create-update-file-attachment.model';
import { GetFileAttachment } from 'src/app/models/file-attachment/get-file-attachment.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileAttachmentApiService {
  private url = "FileAttachment";
  constructor(private http: HttpClient) { }

  getList(con: GetFileAttachment): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${this.url}`, {
      params: {}
    });
  }

  create(file: CreateUpdateFileAttachment): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/${this.url}`, file);
  }

  update(file: CreateUpdateFileAttachment): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/${this.url}`, file);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/${this.url}/` + id);
  }

  deleteMany(ids: number[]): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/${this.url}/deleteMany/`, { params: { ids: ids } });
  }
}
