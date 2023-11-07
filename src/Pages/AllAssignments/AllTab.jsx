import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import EasyAssignmentTab from './EasyAssignmentTab';
import AllAssignments from './AllAssignments';

const AllTab = () => {
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>All</Tab>
                    <Tab>Easy</Tab>
                    <Tab>Medium</Tab>
                    <Tab>Hard</Tab>
                </TabList>

                <TabPanel>
                    <AllAssignments></AllAssignments>
                </TabPanel>
                <TabPanel>
                    <EasyAssignmentTab></EasyAssignmentTab>
                </TabPanel>
                <TabPanel>
                    <AllTab></AllTab>
                </TabPanel>
                <TabPanel>
                    <AllTab></AllTab>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default AllTab;