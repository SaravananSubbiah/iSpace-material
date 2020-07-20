import CONFIG from '../../mind-map.config';

export class Node implements d3.SimulationNodeDatum {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;

  id: string;
  text: string;
  title: string;
  desc: string;
  bgcolor: string;
  linkCount: number = 0;
// 663399,CEB995,035E6D,D1652F,C5023C,E5E4E3
  constructor(id) {
    this.id = id;
    switch (id) {
      case 1: {
        this.title = 'Smart City';
        this.bgcolor = '#663399';
        // tslint:disable-next-line: max-line-length
        this.desc =
          'What is a smart city? Typically a smart city is one where resources are used in a smart way to increase efficiency and improve daily life of the citizens living in that city. So, as an example think of :\na. using your cell phone to switch on and off lights in your house, \nb. or locking your bike if you forget to lock it in the parking lot, \nc. monitor and water your plants, and so on. \nAll these tasks ensure that resources are used efficiently when needed and not used when not necessary. In this semester you will build a smart city by installing \nsmart parking lots\nsmart farms\nsmart inventory systems\nsmart parks\nsmart Traffic lights\netc. Each one of these installations require skills from multiple disciplines such as math, science, programming and above all analytical and critical thinking. We hope that you will enjoy this activity, learn new technologies and skills and have fun completing the activities.';
        break;
      }
      case 2: {
        this.title = 'Smart Parking Lot';
        this.bgcolor = '#CEB995';
        // tslint:disable-next-line: max-line-length
        this.desc =
          'A smart parking lot is one that uses sensors and techniques to keep track of which slots have been occupied and which slots remain open. Such a system lets the driver know were he or she may find a spot to park without having to search for open slots. Use of cameras in parking lots can also capture information about cars parked and in case of criminal activities detect the owner of the car using the camera feed. \n\nAdditionally, since this information can be connected to the Internet, the owner will also be able to know which time slots tend to be busy and require more monitoring. \n\nUpon completing this project the student will be able to\nDescribe what a smart parking lot is\nIdentify the significant components required to design a smart parking lot\nAnalyze requirements to construct each component of the smart parking lot\nImplement the requirements and build the smart parking lot';
        break;
      }
      case 3: {
        this.title = 'Smart Traffic Lights';
        this.bgcolor = '#035E6D';
        this.desc =
          'Smart Traffic Lights are able to monitor traffic flow through a junction using infrared sensors and proximity sensors. Depending on the traffic flow, the lights can adapt and change their state to allow smoother and more efficient flow of traffic, and reduce traffic blocks.\r\n\r\nUpon completing this project the student will be able to\r\nDescribe what a smart traffic light system is\r\nIdentify the significant components required to design a smart traffic light system\r\nAnalyze requirements to construct each component of a smart traffic light system\r\nImplement the requirements and build a smart traffic light system';
        break;
      }
      case 4: {
        this.title = 'Smart Parks';
        this.bgcolor = '#D1652F';
        this.desc =
          'A smart park has several sensors as well. These sensors such as proximity sensors and motion activated sensors can track how many cars, trucks and visitors have come to the park. Such information collected on the cloud via the Internet can be invaluable to park owners who can again monitor the usage of their parks from anywhere at any time. This will also allow park owners and city officials to allocate their resources efficiently.\n\n\nUpon completing this project the student will be able to\nDescribe what a smart park is\nIdentify the significant components required to design a smart parks\nAnalyze requirements to construct each component of the smart parks\nImplement the requirements and build the smart parks';
        break;
      }
      case 5: {
        this.title = 'Smart  Farm';
        this.bgcolor = '#00FF00';
        this.desc = 'A smart inventory system manages the levels of';
        break;
      }
      case 6: {
        this.title = 'Smart Inventory System';
        this.bgcolor = '#C5023C';
        this.desc = 'A smart inventory system manages the levels of';
        break;
      }
      case 7: {
        this.title = 'Smart Hospitals';
        this.bgcolor = '#FFCC99';
        this.desc =
          'Smart hospitals use sensors, hardware and software to ensure that patients, and staff are monitored for their security. Sensors and hardware will be used to tag patients with id tags, monitor patient vitals, provide a controlled environment,  track usage of medication etc. Smart software will be used to offer intra communication among patients, physicians, and family members. and administration.  A smart hospital reduces duplication of information. Such an infra structure will allow the hospitals to function efficiently and effectively.\n\n\nUpon completing this project the student will be able to\nDescribe what a smart hospital is\nIdentify the significant components such as temperature sensors, light sensors, rfid tags,  etc. required to design a smart hospital\nAnalyze requirements to construct each component of the smart farm\nDescribe what you want the software to do\nImplement the requirements and build the smart smart hospital';
        break;
      }
      case 8: {
        this.title = 'Smart Power';
        this.bgcolor = '#E5E4E3';
        this.desc =
          'A smart power system is able to get data from various power installations, such as Hospitals, Residential areas, Markets, etc., and monitor the power consumption at each installation. In case of an emergency caused by a power loss at any one installation, the system is able to reroute power from other installations, depending on priorities.\r\n\r\nUpon completing this project the student will be able to:\r\nDescribe what a smart power system is and its capabilities\r\nIdentify the significant components required to design a smart power system\r\nAnalyze requirements to construct each component of the smart power system\r\nImplement the requirements and build the smart power system';
        break;
      }
    }
  }

  normal = () => {
    return Math.sqrt(this.linkCount / CONFIG.N);
  };

  get r() {
    return 50 * this.normal() + 40;
  }

  get fontSize() {
    return this.normal() + 14 + 'px';
  }

  get color() {
    let index = Math.floor(CONFIG.SPECTRUM.length * this.normal());
    return CONFIG.SPECTRUM[index];
  }
}
