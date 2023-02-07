'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">angular-training-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-ea34c3751416ffadd563c7b8736fb6c8f66fc4d5615aa85cf0c08ed61e8d05a2de6c32017d24c1c691a3fd75f4ed4cdea579bb21c337164e34e7bd8e8b741af8"' : 'data-target="#xs-components-links-module-AppModule-ea34c3751416ffadd563c7b8736fb6c8f66fc4d5615aa85cf0c08ed61e8d05a2de6c32017d24c1c691a3fd75f4ed4cdea579bb21c337164e34e7bd8e8b741af8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-ea34c3751416ffadd563c7b8736fb6c8f66fc4d5615aa85cf0c08ed61e8d05a2de6c32017d24c1c691a3fd75f4ed4cdea579bb21c337164e34e7bd8e8b741af8"' :
                                            'id="xs-components-links-module-AppModule-ea34c3751416ffadd563c7b8736fb6c8f66fc4d5615aa85cf0c08ed61e8d05a2de6c32017d24c1c691a3fd75f4ed4cdea579bb21c337164e34e7bd8e8b741af8"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyAboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyAboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyBodyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyBodyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyEmployeeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyEmployeeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyHeadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyHeadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyHttpApiMemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyHttpApiMemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyHttpRequestEmpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyHttpRequestEmpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyLearnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyLearnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyLeftComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyLeftComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyLoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyModalFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyModalFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyObserPromiseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyObserPromiseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyPipeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyPipeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyReactiveFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyReactiveFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyRightComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyRightComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyRxJsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyRxJsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyStudentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyStudentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyUsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyUsersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyViewchildComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyViewchildComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgrxDemoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgrxDemoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReactiveValidationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReactiveValidationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubjectDemoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubjectDemoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubscriptionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscriptionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AppModule-ea34c3751416ffadd563c7b8736fb6c8f66fc4d5615aa85cf0c08ed61e8d05a2de6c32017d24c1c691a3fd75f4ed4cdea579bb21c337164e34e7bd8e8b741af8"' : 'data-target="#xs-directives-links-module-AppModule-ea34c3751416ffadd563c7b8736fb6c8f66fc4d5615aa85cf0c08ed61e8d05a2de6c32017d24c1c691a3fd75f4ed4cdea579bb21c337164e34e7bd8e8b741af8"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-ea34c3751416ffadd563c7b8736fb6c8f66fc4d5615aa85cf0c08ed61e8d05a2de6c32017d24c1c691a3fd75f4ed4cdea579bb21c337164e34e7bd8e8b741af8"' :
                                        'id="xs-directives-links-module-AppModule-ea34c3751416ffadd563c7b8736fb6c8f66fc4d5615aa85cf0c08ed61e8d05a2de6c32017d24c1c691a3fd75f4ed4cdea579bb21c337164e34e7bd8e8b741af8"' }>
                                        <li class="link">
                                            <a href="directives/AppNotDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppNotDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-ea34c3751416ffadd563c7b8736fb6c8f66fc4d5615aa85cf0c08ed61e8d05a2de6c32017d24c1c691a3fd75f4ed4cdea579bb21c337164e34e7bd8e8b741af8"' : 'data-target="#xs-injectables-links-module-AppModule-ea34c3751416ffadd563c7b8736fb6c8f66fc4d5615aa85cf0c08ed61e8d05a2de6c32017d24c1c691a3fd75f4ed4cdea579bb21c337164e34e7bd8e8b741af8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-ea34c3751416ffadd563c7b8736fb6c8f66fc4d5615aa85cf0c08ed61e8d05a2de6c32017d24c1c691a3fd75f4ed4cdea579bb21c337164e34e7bd8e8b741af8"' :
                                        'id="xs-injectables-links-module-AppModule-ea34c3751416ffadd563c7b8736fb6c8f66fc4d5615aa85cf0c08ed61e8d05a2de6c32017d24c1c691a3fd75f4ed4cdea579bb21c337164e34e7bd8e8b741af8"' }>
                                        <li class="link">
                                            <a href="injectables/ConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DataAPIService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataAPIService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MemAPIService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MemAPIService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/loginService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >loginService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/studentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >studentService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-ea34c3751416ffadd563c7b8736fb6c8f66fc4d5615aa85cf0c08ed61e8d05a2de6c32017d24c1c691a3fd75f4ed4cdea579bb21c337164e34e7bd8e8b741af8"' : 'data-target="#xs-pipes-links-module-AppModule-ea34c3751416ffadd563c7b8736fb6c8f66fc4d5615aa85cf0c08ed61e8d05a2de6c32017d24c1c691a3fd75f4ed4cdea579bb21c337164e34e7bd8e8b741af8"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-ea34c3751416ffadd563c7b8736fb6c8f66fc4d5615aa85cf0c08ed61e8d05a2de6c32017d24c1c691a3fd75f4ed4cdea579bb21c337164e34e7bd8e8b741af8"' :
                                            'id="xs-pipes-links-module-AppModule-ea34c3751416ffadd563c7b8736fb6c8f66fc4d5615aa85cf0c08ed61e8d05a2de6c32017d24c1c691a3fd75f4ed4cdea579bb21c337164e34e7bd8e8b741af8"' }>
                                            <li class="link">
                                                <a href="pipes/ExponentialStrengthPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExponentialStrengthPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LazyLoadingRoutingModule.html" data-type="entity-link" >LazyLoadingRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PreLoadingRoutingModule.html" data-type="entity-link" >PreLoadingRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/LazyDemoComponent.html" data-type="entity-link" >LazyDemoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PreloadingDemoComponent.html" data-type="entity-link" >PreloadingDemoComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddUser.html" data-type="entity-link" >AddUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppCustomPreloader.html" data-type="entity-link" >AppCustomPreloader</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ConfigService.html" data-type="entity-link" >ConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataAPIService.html" data-type="entity-link" >DataAPIService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/loginService.html" data-type="entity-link" >loginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MemAPIService.html" data-type="entity-link" >MemAPIService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/studentService.html" data-type="entity-link" >studentService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/UserModel.html" data-type="entity-link" >UserModel</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});