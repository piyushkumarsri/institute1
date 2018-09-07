import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment';
import { ApiResonse } from "./api.resonse";

@Injectable()
export class DataService {


    //injecting http client to make http request to urls 
    constructor(private httpClient: HttpClient) {

    }
    doLogin(formData) {
        console.log("Login user with data", formData);
    }
    getSubject() {
        return [
            { id: 1, name: 'Angular' },
            { id: 2, name: 'Node' },
        ]
    }

    // getCourses() {
    //     // returning the Observable for this url
    //     return this.httpClient.get('assets/test.json')
    // }

    getUsers() {
        return this.httpClient.get<ApiResonse>(this.getUrl("admin/users"))
    }

    getProfile() {
        return this.httpClient.get<ApiResonse>(this.getUrl("user/profile"))
    }
    getCourses() {
        return this.httpClient.get<ApiResonse>(this.getUrl("admin/get-courses"))
    }
    getBatch() {
        return this.httpClient.get<ApiResonse>(this.getUrl("admin/get-batch"))
    }


    saveUser(data) {
        return this.httpClient.post<ApiResonse>(this.getUrl('admin/register-user'), data);
    }
    saveCourse(data) {
        return this.httpClient.post<ApiResonse>(this.getUrl('admin/register-course'), data);
    }
    saveBatch(data) {
        return this.httpClient.post<ApiResonse>(this.getUrl('admin/register-batch'), data);
    }

    saveChapter(data) {
        return this.httpClient.post<ApiResonse>(this.getUrl('admin/add-chapter'), data);
    }

    private getUrl(url) {
        return environment.apiPath + url;
    }
}