import"./chunk-GIV53FEX.js";import{$ as z,D as P,Ea as R,Fa as T,G as f,H as g,I as S,J as Z,L as M,Na as j,T as d,U as r,W as A,Wa as p,X as F,aa as o,b as O,d as E,ka as v,q as y,qb as B,va as b,w as x,wa as I,xa as c}from"./chunk-3XYS374J.js";import{a as m,b as _}from"./chunk-MKQW6NQN.js";var K=["*"],u=class{_clearListeners(){for(let i of this._listeners)i.remove();this._listeners=[]}constructor(i){this._ngZone=i,this._pending=[],this._listeners=[],this._targetStream=new E(void 0)}getLazyEmitter(i){return this._targetStream.pipe(x(l=>{let e=new O(t=>{if(!l){this._pending.push({observable:e,observer:t});return}let s=l.addListener(i,a=>{this._ngZone.run(()=>t.next(a))});if(!s){t.complete();return}return this._listeners.push(s),()=>s.remove()});return e}))}setTarget(i){let l=this._targetStream.value;i!==l&&(l&&(this._clearListeners(),this._pending=[]),this._targetStream.next(i),this._pending.forEach(e=>e.observable.subscribe(e.observer)),this._pending=[])}destroy(){this._clearListeners(),this._pending=[],this._targetStream.complete()}},h={center:{lat:37.421995,lng:-122.084092},zoom:17,mapTypeId:"roadmap"},G="500px",N="500px",C=(()=>{let i=class i{set center(e){this._center=e}set zoom(e){this._zoom=e}set options(e){this._options=e||h}constructor(e,t,s){if(this._elementRef=e,this._ngZone=t,this._eventManager=new u(f(r)),this.height=G,this.width=N,this._options=h,this.mapInitialized=new d,this.authFailure=new d,this.boundsChanged=this._eventManager.getLazyEmitter("bounds_changed"),this.centerChanged=this._eventManager.getLazyEmitter("center_changed"),this.mapClick=this._eventManager.getLazyEmitter("click"),this.mapDblclick=this._eventManager.getLazyEmitter("dblclick"),this.mapDrag=this._eventManager.getLazyEmitter("drag"),this.mapDragend=this._eventManager.getLazyEmitter("dragend"),this.mapDragstart=this._eventManager.getLazyEmitter("dragstart"),this.headingChanged=this._eventManager.getLazyEmitter("heading_changed"),this.idle=this._eventManager.getLazyEmitter("idle"),this.maptypeidChanged=this._eventManager.getLazyEmitter("maptypeid_changed"),this.mapMousemove=this._eventManager.getLazyEmitter("mousemove"),this.mapMouseout=this._eventManager.getLazyEmitter("mouseout"),this.mapMouseover=this._eventManager.getLazyEmitter("mouseover"),this.projectionChanged=this._eventManager.getLazyEmitter("projection_changed"),this.mapRightclick=this._eventManager.getLazyEmitter("rightclick"),this.tilesloaded=this._eventManager.getLazyEmitter("tilesloaded"),this.tiltChanged=this._eventManager.getLazyEmitter("tilt_changed"),this.zoomChanged=this._eventManager.getLazyEmitter("zoom_changed"),this._isBrowser=B(s),this._isBrowser){let a=window;a.google,this._existingAuthFailureCallback=a.gm_authFailure,a.gm_authFailure=()=>{this._existingAuthFailureCallback&&this._existingAuthFailureCallback(),this.authFailure.emit()}}}ngOnChanges(e){(e.height||e.width)&&this._setSize();let t=this.googleMap;t&&(e.options&&t.setOptions(this._combineOptions()),e.center&&this._center&&t.setCenter(this._center),e.zoom&&this._zoom!=null&&t.setZoom(this._zoom),e.mapTypeId&&this.mapTypeId&&t.setMapTypeId(this.mapTypeId))}ngOnInit(){this._isBrowser&&(this._mapEl=this._elementRef.nativeElement.querySelector(".map-container"),this._setSize(),google.maps.Map?this._initialize(google.maps.Map):this._ngZone.runOutsideAngular(()=>{google.maps.importLibrary("maps").then(e=>this._initialize(e.Map))}))}_initialize(e){this._ngZone.runOutsideAngular(()=>{this.googleMap=new e(this._mapEl,this._combineOptions()),this._eventManager.setTarget(this.googleMap),this.mapInitialized.emit(this.googleMap)})}ngOnDestroy(){if(this.mapInitialized.complete(),this._eventManager.destroy(),this._isBrowser){let e=window;e.gm_authFailure=this._existingAuthFailureCallback}}fitBounds(e,t){this._assertInitialized(),this.googleMap.fitBounds(e,t)}panBy(e,t){this._assertInitialized(),this.googleMap.panBy(e,t)}panTo(e){this._assertInitialized(),this.googleMap.panTo(e)}panToBounds(e,t){this._assertInitialized(),this.googleMap.panToBounds(e,t)}getBounds(){return this._assertInitialized(),this.googleMap.getBounds()||null}getCenter(){return this._assertInitialized(),this.googleMap.getCenter()}getClickableIcons(){return this._assertInitialized(),this.googleMap.getClickableIcons()}getHeading(){return this._assertInitialized(),this.googleMap.getHeading()}getMapTypeId(){return this._assertInitialized(),this.googleMap.getMapTypeId()}getProjection(){return this._assertInitialized(),this.googleMap.getProjection()||null}getStreetView(){return this._assertInitialized(),this.googleMap.getStreetView()}getTilt(){return this._assertInitialized(),this.googleMap.getTilt()}getZoom(){return this._assertInitialized(),this.googleMap.getZoom()}get controls(){return this._assertInitialized(),this.googleMap.controls}get data(){return this._assertInitialized(),this.googleMap.data}get mapTypes(){return this._assertInitialized(),this.googleMap.mapTypes}get overlayMapTypes(){return this._assertInitialized(),this.googleMap.overlayMapTypes}_resolveMap(){return this.googleMap?Promise.resolve(this.googleMap):this.mapInitialized.pipe(y(1)).toPromise()}_setSize(){if(this._mapEl){let e=this._mapEl.style;e.height=this.height===null?"":W(this.height)||G,e.width=this.width===null?"":W(this.width)||N}}_combineOptions(){let e=this._options||{};return _(m({},e),{center:this._center||e.center||h.center,zoom:this._zoom??e.zoom??h.zoom,mapTypeId:this.mapTypeId||e.mapTypeId||h.mapTypeId,mapId:this.mapId||e.mapId})}_assertInitialized(){this.googleMap}};i.\u0275fac=function(t){return new(t||i)(o(A),o(r),o(F))},i.\u0275cmp=g({type:i,selectors:[["google-map"]],inputs:{height:"height",width:"width",mapId:"mapId",mapTypeId:"mapTypeId",center:"center",zoom:"zoom",options:"options"},outputs:{mapInitialized:"mapInitialized",authFailure:"authFailure",boundsChanged:"boundsChanged",centerChanged:"centerChanged",mapClick:"mapClick",mapDblclick:"mapDblclick",mapDrag:"mapDrag",mapDragend:"mapDragend",mapDragstart:"mapDragstart",headingChanged:"headingChanged",idle:"idle",maptypeidChanged:"maptypeidChanged",mapMousemove:"mapMousemove",mapMouseout:"mapMouseout",mapMouseover:"mapMouseover",projectionChanged:"projectionChanged",mapRightclick:"mapRightclick",tilesloaded:"tilesloaded",tiltChanged:"tiltChanged",zoomChanged:"zoomChanged"},exportAs:["googleMap"],standalone:!0,features:[M,p],ngContentSelectors:K,decls:2,vars:0,consts:[[1,"map-container"]],template:function(t,s){t&1&&(R(),c(0,"div",0),T(1))},encapsulation:2,changeDetection:0});let n=i;return n})(),Q=/([A-Za-z%]+)$/;function W(n){return n==null?"":Q.test(n)?n:`${n}px`}var $={position:{lat:37.421995,lng:-122.084092}},H=(()=>{let i=class i{set title(e){this._title=e}set position(e){this._position=e}set label(e){this._label=e}set clickable(e){this._clickable=e}set options(e){this._options=e}set icon(e){this._icon=e}set visible(e){this._visible=e}constructor(e,t){this._googleMap=e,this._ngZone=t,this._eventManager=new u(f(r)),this.animationChanged=this._eventManager.getLazyEmitter("animation_changed"),this.mapClick=this._eventManager.getLazyEmitter("click"),this.clickableChanged=this._eventManager.getLazyEmitter("clickable_changed"),this.cursorChanged=this._eventManager.getLazyEmitter("cursor_changed"),this.mapDblclick=this._eventManager.getLazyEmitter("dblclick"),this.mapDrag=this._eventManager.getLazyEmitter("drag"),this.mapDragend=this._eventManager.getLazyEmitter("dragend"),this.draggableChanged=this._eventManager.getLazyEmitter("draggable_changed"),this.mapDragstart=this._eventManager.getLazyEmitter("dragstart"),this.flatChanged=this._eventManager.getLazyEmitter("flat_changed"),this.iconChanged=this._eventManager.getLazyEmitter("icon_changed"),this.mapMousedown=this._eventManager.getLazyEmitter("mousedown"),this.mapMouseout=this._eventManager.getLazyEmitter("mouseout"),this.mapMouseover=this._eventManager.getLazyEmitter("mouseover"),this.mapMouseup=this._eventManager.getLazyEmitter("mouseup"),this.positionChanged=this._eventManager.getLazyEmitter("position_changed"),this.mapRightclick=this._eventManager.getLazyEmitter("rightclick"),this.shapeChanged=this._eventManager.getLazyEmitter("shape_changed"),this.titleChanged=this._eventManager.getLazyEmitter("title_changed"),this.visibleChanged=this._eventManager.getLazyEmitter("visible_changed"),this.zindexChanged=this._eventManager.getLazyEmitter("zindex_changed"),this.markerInitialized=new d}ngOnInit(){this._googleMap._isBrowser&&(google.maps.Marker&&this._googleMap.googleMap?this._initialize(this._googleMap.googleMap,google.maps.Marker):this._ngZone.runOutsideAngular(()=>{Promise.all([this._googleMap._resolveMap(),google.maps.importLibrary("marker")]).then(([e,t])=>{this._initialize(e,t.Marker)})}))}_initialize(e,t){this._ngZone.runOutsideAngular(()=>{this.marker=new t(this._combineOptions()),this._assertInitialized(),this.marker.setMap(e),this._eventManager.setTarget(this.marker),this.markerInitialized.next(this.marker)})}ngOnChanges(e){let{marker:t,_title:s,_position:a,_label:w,_clickable:k,_icon:D,_visible:L}=this;t&&(e.options&&t.setOptions(this._combineOptions()),e.title&&s!==void 0&&t.setTitle(s),e.position&&a&&t.setPosition(a),e.label&&w!==void 0&&t.setLabel(w),e.clickable&&k!==void 0&&t.setClickable(k),e.icon&&D&&t.setIcon(D),e.visible&&L!==void 0&&t.setVisible(L))}ngOnDestroy(){this.markerInitialized.complete(),this._eventManager.destroy(),this.marker?.setMap(null)}getAnimation(){return this._assertInitialized(),this.marker.getAnimation()||null}getClickable(){return this._assertInitialized(),this.marker.getClickable()}getCursor(){return this._assertInitialized(),this.marker.getCursor()||null}getDraggable(){return this._assertInitialized(),!!this.marker.getDraggable()}getIcon(){return this._assertInitialized(),this.marker.getIcon()||null}getLabel(){return this._assertInitialized(),this.marker.getLabel()||null}getOpacity(){return this._assertInitialized(),this.marker.getOpacity()||null}getPosition(){return this._assertInitialized(),this.marker.getPosition()||null}getShape(){return this._assertInitialized(),this.marker.getShape()||null}getTitle(){return this._assertInitialized(),this.marker.getTitle()||null}getVisible(){return this._assertInitialized(),this.marker.getVisible()}getZIndex(){return this._assertInitialized(),this.marker.getZIndex()||null}getAnchor(){return this._assertInitialized(),this.marker}_resolveMarker(){return this.marker?Promise.resolve(this.marker):this.markerInitialized.pipe(y(1)).toPromise()}_combineOptions(){let e=this._options||$;return _(m({},e),{title:this._title||e.title,position:this._position||e.position,label:this._label||e.label,clickable:this._clickable??e.clickable,map:this._googleMap.googleMap,icon:this._icon||e.icon,visible:this._visible??e.visible})}_assertInitialized(){}};i.\u0275fac=function(t){return new(t||i)(o(C),o(r))},i.\u0275dir=Z({type:i,selectors:[["map-marker"]],inputs:{title:"title",position:"position",label:"label",clickable:"clickable",options:"options",icon:"icon",visible:"visible"},outputs:{animationChanged:"animationChanged",mapClick:"mapClick",clickableChanged:"clickableChanged",cursorChanged:"cursorChanged",mapDblclick:"mapDblclick",mapDrag:"mapDrag",mapDragend:"mapDragend",draggableChanged:"draggableChanged",mapDragstart:"mapDragstart",flatChanged:"flatChanged",iconChanged:"iconChanged",mapMousedown:"mapMousedown",mapMouseout:"mapMouseout",mapMouseover:"mapMouseover",mapMouseup:"mapMouseup",positionChanged:"positionChanged",mapRightclick:"mapRightclick",shapeChanged:"shapeChanged",titleChanged:"titleChanged",visibleChanged:"visibleChanged",zindexChanged:"zindexChanged",markerInitialized:"markerInitialized"},exportAs:["mapMarker"],standalone:!0,features:[M]});let n=i;return n})();var U=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=S({type:i}),i.\u0275inj=P({});let n=i;return n})();var Ce=(()=>{let i=class i{constructor(){this.center={lat:-25.746019,lng:28.188058},this.mapOptions={disableDefaultUI:!1,fullscreenControl:!1},this.title="pretoria",this.position={lat:-34.681,lng:-58.371},this.label={color:"red",text:"Marcador"},this.colors=[{color:"primary",textColor:"primary"},{color:"secondary",textColor:"secondary"},{color:"success",textColor:"success"},{color:"danger",textColor:"danger"},{color:"warning",textColor:"warning"},{color:"info",textColor:"info"},{color:"light"},{color:"dark"}],this.imgContext={$implicit:"top",bottom:"bottom"},this.tabs=["Active","List","Disabled"]}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=g({type:i,selectors:[["app-cards"]],standalone:!0,features:[p],decls:4,vars:3,consts:[["width","100%","height","400",3,"center","options"],[3,"label"]],template:function(t,s){t&1&&(b(0,"h3"),j(1,"Monitor Routes"),I(),b(2,"google-map",0),c(3,"map-marker",1),I()),t&2&&(z(2),v("center",s.center)("options",s.mapOptions),z(),v("label",s.label))},dependencies:[U,C,H]});let n=i;return n})();export{Ce as CardsComponent};