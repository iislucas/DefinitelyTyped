﻿/// <reference path="MediaStream.d.ts" />

// These are TypeScript definitions to support static typing in TypeScript when interacting with WebRtc.
// Definitions taken from http://dev.w3.org/2011/webrtc/editor/webrtc.html

// These are TypeScript definitions to support static typing in TypeScript when interacting with WebRtc.
// Definitions taken from http://dev.w3.org/2011/webrtc/editor/webrtc.html

interface RTCConfiguration {
	iceServers: RTCIceServer[];
}
declare var RTCConfiguration: {
	prototype: RTCConfiguration;
	new (): RTCConfiguration;
}

interface RTCIceServer {
	url: string;
	credential?: string;
}
declare var RTCIceServer: {
	prototype: RTCIceServer;
	new (): RTCIceServer;
}

interface webkitRTCPeerConnection extends RTCPeerConnection {
}
declare var webkitRTCPeerConnection: {
	prototype: webkitRTCPeerConnection;
	new (settings: RTCPeerConnectionConfig, constraints?:MediaConstraints): webkitRTCPeerConnection;
}

interface IceState {
}
declare var IceState: {
	prototype: IceState;
	new (): IceState;
}

// For Chrome, look at the code here: https://code.google.com/p/chromium/codesearch#chromium/src/third_party/libjingle/source/talk/app/webrtc/webrtcsession.cc&sq=package:chromium&dr=C&l=63
interface OptionalMediaConstraint {
	// When true, will use DTLS/SCTP data channels
	DtlsSrtpKeyAgreement?: boolean;
	// When true will use Rtp-based data channels (depreicated)
	RtpDataChannels?: boolean;
}

// ks 12/20/12 - There's more here that doesn't seem to be documented very well yet.
// http://www.w3.org/TR/2013/WD-webrtc-20130910/
interface MediaConstraints {
	mandatory?: MediaOfferConstraints;
	optional?: OptionalMediaConstraint[]
}

interface MediaOfferConstraints {
	OfferToReceiveAudio: boolean;
	OfferToReceiveVideo: boolean;
}

interface RTCSessionDescription {
	type?: RTCSdpType;
	sdp?: string;
}
declare var RTCSessionDescription: {
	prototype: RTCSessionDescription;
	new (descriptionInitDict?: RTCSessionDescriptionInit): RTCSessionDescription;
}

interface RTCSessionDescriptionInit {
	type: RTCSdpType;
	sdp: string;
}
declare var RTCSessionDescriptionInit: {
	prototype: RTCSessionDescriptionInit;
	new (): RTCSessionDescriptionInit;
}

interface SdpType {
}

interface RTCPeerState {
}

interface RTCDataChannelInit {
	reliable: boolean;
}

declare enum RTCSdpType {
	offer,
	pranswer,
	answer
}

declare enum RTCDataChannelState {
	connecting,
	open,
	closing,
	closed
}

interface RTCDataChannel extends EventTarget {
	label: string;
	reliable: boolean;
	readyState: RTCDataChannelState;
	bufferedAmount: number;
	onopen: (event: Event)=> void;
	onerror: (event: Event)=> void;
	onclose: (event: Event)=> void;
	close(): void;
	onmessage: (event: Event)=> void;
	binaryType: string;
	send(data: string);
	send(data: ArrayBuffer);
	send(data: Blob);
}
declare var RTCDataChannel: {
	prototype: RTCDataChannel;
	new (): RTCDataChannel;
}

interface RTCDataChannelEvent extends Event {
	constructor (eventInitDict: RTCDataChannelEventInit);
	channel: RTCDataChannel;
}
declare var RTCDataChannelEvent: {
	prototype: RTCDataChannelEvent;
	new (eventInitDict: RTCDataChannelEventInit);
}

interface RTCIceCandidateEvent extends Event{
	candidate: RTCIceCandidate;
}

interface RTCMediaStreamEvent extends Event {
	stream: MediaStream;
}

interface EventInit {
}

interface RTCDataChannelEventInit extends EventInit {
	channel: RTCDataChannel;
}

interface RTCVoidCallback {
	(): void;
}
interface RTCSessionDescriptionCallback {
	(sdp: RTCSessionDescription): void;
}
interface RTCPeerConnectionErrorCallback {
	(errorInformation: string): void;
}

/** This should be an enum */
interface RTCIceGatheringState {
	string;
}

/** This should be an enum */
interface RTCIceConnectionState {
	string;
}

/** This should be an enum */
interface RTCSignalingState{
	string;
}

interface RTCPeerConnection {
	createOffer(successCallback: RTCSessionDescriptionCallback, failureCallback?: RTCPeerConnectionErrorCallback, constraints?: MediaConstraints): void;
	createAnswer(successCallback: RTCSessionDescriptionCallback, failureCallback?: RTCPeerConnectionErrorCallback, constraints?: MediaConstraints): void;
	setLocalDescription(description: RTCSessionDescription, successCallback?: RTCVoidCallback, failureCallback?: RTCPeerConnectionErrorCallback): void;
	localDescription: RTCSessionDescription;
	setRemoteDescription(description: RTCSessionDescription, successCallback?: RTCVoidCallback, failureCallback?: RTCPeerConnectionErrorCallback): void;
	remoteDescription: RTCSessionDescription;
	signalingState: RTCSignalingState;
	updateIce(configuration?: RTCConfiguration, constraints?: MediaConstraints): void;
	addIceCandidate(candidate: RTCIceCandidate): void;
	iceGatheringState: RTCIceGatheringState;
	iceConnectionState: RTCIceConnectionState;
	getLocalStreams(): MediaStream[];
	getRemoteStreams(): MediaStream[];
	createDataChannel(label?: string, dataChannelDict?: RTCDataChannelInit): RTCDataChannel;
	ondatachannel: (event: Event)=> void;
	addStream(stream: MediaStream, constraints?: MediaConstraints): void;
	removeStream(stream: MediaStream): void;
	close(): void;
	onnegotiationneeded: (event: Event)=> void;
	onconnecting: (event: Event)=> void;
	onopen: (event: Event)=> void;
	onaddstream: (event: RTCMediaStreamEvent)=> void;
	onremovestream: (event: RTCMediaStreamEvent)=> void;
	onstatechange: (event: Event)=> void;
	onicechange: (event: Event)=> void;
	onicecandidate: (event: RTCIceCandidateEvent)=> void;
	onidentityresult: (event: Event)=> void;
}
declare var RTCPeerConnection: {
	prototype: RTCPeerConnection;
	new (configuration: RTCConfiguration, constraints?: MediaConstraints): RTCPeerConnection;
}

interface RTCIceCandidate {
	candidate?: string;
	sdpMid?: string;
	sdpMLineIndex?: number;
}
declare var RTCIceCandidate: {
	prototype: RTCIceCandidate;
	new (candidateInitDict?: RTCIceCandidate);
}

interface RTCIceCandidateInit {
	candidate: string;
	sdpMid: string;
	sdpMLineIndex: number;
}
declare var RTCIceCandidateInit:{
	prototype: RTCIceCandidateInit;
	new (): RTCIceCandidateInit;
}

interface PeerConnectionIceEvent {
	peer: RTCPeerConnection;
	candidate: RTCIceCandidate;
}
declare var PeerConnectionIceEvent: {
	prototype: PeerConnectionIceEvent;
	new (): PeerConnectionIceEvent;
}

interface RTCPeerConnectionConfig {
	iceServers: RTCIceServer[];
}
declare var RTCPeerConnectionConfig: {
	prototype: RTCPeerConnectionConfig;
	new (): RTCPeerConnectionConfig;
}
