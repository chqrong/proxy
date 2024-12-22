function FindProxyForURL(url, host) {

    var proxy = "PROXY 192.168.3.150:7890";
    var isMacOnline = (dnsResolve("192.168.3.150") != null);

    if (isMacOnline) {
        return proxy;
    } else {
        return "DIRECT";
    }
}