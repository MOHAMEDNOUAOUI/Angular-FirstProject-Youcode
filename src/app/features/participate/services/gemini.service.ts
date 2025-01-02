import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GenerateContentResult, GoogleGenerativeAI} from '@google/generative-ai';
import { BehaviorSubject, catchError, from, map, Observable, switchMap } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class Gemini {

  private genAI: GoogleGenerativeAI;
  private model: any;
  private isLoading = new BehaviorSubject<boolean>(false);


    constructor() {
    this.genAI = new GoogleGenerativeAI('AIzaSyBZ5EjxR47ggFn3o0CbAzUE6GXAi_F6UfI');
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-pro' });
  }

  getIsLoading(): Observable<boolean> {
    return this.isLoading.asObservable();
  }

  async generateText(prompt: string): Promise<string> {
    const result = await this.model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  }

  generateContent(prompt: string): Observable<string> {
    this.isLoading.next(true);
    return from(this.generateText(prompt)).pipe(
      map(text => {
        this.isLoading.next(false);
        return text;
      })
    );
  }
}