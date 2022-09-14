import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit {
  @Input() agentName = '';
  @Input() agentDescription = '';
  @Input() agentIcon = '';

  constructor() { }

  ngOnInit(): void {
  }

}
