import IPFS from 'ipfs-api';
import ipfsConst from '../constants/ipfs';


const ipfs = new IPFS({ host: ipfsConst.host, port: ipfsConst.port, protocol: ipfsConst.protocol, headers: ipfsConst.headers, url: ipfsConst.url});


export default ipfs;
