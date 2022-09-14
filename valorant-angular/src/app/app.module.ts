import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule  } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AgentsComponent } from './agents/agents.component';
import { FlexModule } from '@angular/flex-layout';
import { AgentComponent } from './agent/agent.component';

@NgModule({
  declarations: [
    AppComponent,
    AgentsComponent,
    AgentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
