import { Component, OnInit } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { Agent } from '../interfaces/agent.interface';
import { ValorantApiServiceService } from '../services/valorant-api-service.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {
  public agents: Agent[] = [];

  constructor(private valorantApiService: ValorantApiServiceService) { }

  ngOnInit(): void {
    this.setValorantAgents().subscribe();
  }

  private setValorantAgents(): Observable<void> {
    return this.valorantApiService.getValorantAgents().pipe(
      take(1),
      map((agents: Agent[]) => {
        this.agents = agents;
      })
    )
  }

}
