import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, take } from 'rxjs';
import { Agent } from '../interfaces/agent.interface';

@Injectable({
  providedIn: 'root'
})
export class ValorantApiServiceService {

  constructor(private httpClient: HttpClient) { }

  public getValorantAgents(): Observable<Agent[]> {
    return this.httpClient.get('https://valorant-api.com/v1/agents',).pipe(
      take(1),
      map((response: any) => {
        return response.data.reduce((previousVal: Agent[], currentVal: any) => {
          const agent: Agent = {
            displayIcon: currentVal.displayIcon,
            displayName: currentVal.displayName,
            agentDescription: currentVal.description
          }
          previousVal.push(agent);
          return previousVal;
        }, []);
      })
    );
  }
}
