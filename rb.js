const { App, createAppAuth } = require('@octokit/auth-app');

const appId = 648679;
const privateKey = '-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA2Mev2HxiQsA5zuhnq2xYQx7Oq2MNtdCq30DbFNE12Vakk0dG
zDNXLXbNel/RMxYOwd4ohzQ6yDt/Z5b+76ZPnebFeiUdf4S1v7Ms1MlyxQfjNeXZ
kF9Yb6MEAq4Ulsu89euG/XbO3HWYS4KAE+TZJNjhM/JriLJdcogr4nAFEiti6/yX
tmqvFC3PYYSrE7H++1Hj2D5duyAV+9helaJwplVLvgE70sRM+mpexiWarcZIOG4h
dcALdiCMc6UfII7p17Hg8HImc8xEh450WJAZcXdRFqQiTyIICK3WQO3tHcKOKSxJ
09iW59XDAn02rjI0HbH/gI3juv0XCjs2HBCztQIDAQABAoIBAE+MT1HgquoVweDU
VZ6JHoZa2rn3mkNatClCkmI8N0duzOuiny81s8riKpq6aHkXogiwLi0XFG7/rkvk
E977J4Io+dRNpFpz54HWDSB0X+I/d7gChWi+JCSrLECTgsinMMsJR7rhCx3JJT6o
P7mNI8WqtFEspxs9YJ8zqu7n7mRwy+D07LLyGcX0oM3DnjNvtCU8wh2ZyOeAVcal
BmHuxrv34vAx+MkeBYRpsLsY0vKIgYsoKJ9rfYucHZwQJHe868X90Zme7ePrsaMg
iZfOroC9LrAYkAxCnL2H7y81EVDPxJEnuK0o5ksgh8t6SK7E3DhG+kFFQjvEZxnf
D0H0VO0CgYEA/3i3ftw+hqAvCRtzGmM25hLNKNUHA+/dyvslG64b/YXp8+OGyL/J
ILE2dkg2VTTZHMN2mSBdPeox01XaKUMeTM2HGunZxvmiKNdRnFtjj/2xgUm5L9iZ
hbEafGsdxNLreEyPXNHAe4GFxasVGhrZfT9HcrhjJd31CrfLwJZ5i/sCgYEA2Tp7
NX0NgOwsF7FP0+lblQSncJx+YQeMn6QMghfZ++qwDqW5FaHI9D8TxQO/By9gMrWu
Ppm/GwI7tzAP6aKfXExUZkqL/Mok8H5CAm04OMUSR8bLVIPwVv6Q7UmNg7kUBgtR
5Dd7p1O3tvUBC7EwbGJ/Fse5nNI9yQAjQCicgA8CgYEAvtgxS+XAF9YGDSmiXO4N
DuawuHYbXYeNCpt+5ySz6DpnwTgRclpDJ9b6tnXPkOt/3YrvSAjzXtNbEWMrLHPl
aL6I1UQo2gmWaCgh4UosIF8GgWzPmLyYQ1VAUf27KVPfb+jRmCdhQWJKypW5l9zC
6FujRkIUXy9mZPFUlrRSbI0CgYEAnoU3vjvIq+ks8Ak7uOfVJjTkP6Bj9Ui+DQ14
90KSl2yXF8lF/Iw4ikyxj5cBQywGZlsAkbw+omYJz8+p/RPoeUFWYeNKrqmRNVLd
tsmfOoZNpcVjQgSaUdGpTw/azmI0Q4jlNMZsXRoRudim77JZJO7n0Wbkg5VE8zY/
gyVft28CgYBA+07ZT7BpOfJIQhh3/O/nGflEeRJ2Q86WWycjeYTZ7OUHvhvjgrT/
B8EC14jsnw8qSVTxa2VG7wY5pD+B/GqzhT/lwfGgw5I0ltud88jL9k8TNEGYbT8x
eNSHUyIBZqcgxd07lHVuhGZykNKE+4TB1VHsQduLe153GOpOA8terw==
-----END RSA PRIVATE KEY-----
';

// Create an authenticated app instance
const app = new App({ id: appId, privateKey });

// Create authentication for installation
const auth = createAppAuth({ id: appId, privateKey });

// Obtain an installation access token (example: for a specific repository with installation ID)
const installationId = 44411270;
const { token } = await auth({ type: 'installation', installationId });

console.log('Installation access token:', token);
