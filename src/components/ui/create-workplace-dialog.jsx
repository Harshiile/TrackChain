import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const CreateWorkplaceDialog = ({
    open,
    onOpenChange,
    onSave
}) => {
    const [name, setName] = useState('');
    const [attendanceType, setAttendanceType] = useState('weekly');
    const [totalDays, setTotalDays] = useState(30);
    const [daysPresent, setDaysPresent] = useState(0);
    const [color, setColor] = useState('#3498db');

    const colors = ['#3498db', '#2ecc71', '#e74c3c', '#9b59b6', '#f39c12', '#1abc9c'];

    const handleSave = () => {
        if (!name) {
            toast.error('Please enter a workplace name');
            return;
        }

        if (daysPresent > totalDays) {
            toast.error('Present days cannot exceed total days');
            return;
        }

        const attendancePercentage = Math.round((daysPresent / totalDays) * 100);

        onSave({
            name,
            attendanceType,
            attendancePercentage,
            daysPresent,
            totalDays,
            color
        });

        // Reset the form
        setName('');
        setAttendanceType('weekly');
        setTotalDays(30);
        setDaysPresent(0);
        setColor('#3498db');

        onOpenChange(false);

        toast.success('New workplace added');
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create New Workplace</DialogTitle>
                </DialogHeader>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid gap-4 py-4"
                >
                    <div className="grid gap-2">
                        <Label htmlFor="name">Workplace Name</Label>
                        <motion.div whileFocus={{ scale: 1.02 }}>
                            <Input
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter workplace name"
                            />
                        </motion.div>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="attendanceType">Attendance Type</Label>
                        <Select
                            value={attendanceType}
                            onValueChange={(value) => setAttendanceType(value)}
                        >
                            <SelectTrigger id="attendanceType">
                                <SelectValue placeholder="Select attendance type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="weekly">Weekly</SelectItem>
                                <SelectItem value="monthly">Monthly</SelectItem>
                                <SelectItem value="annually">Annually</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="totalDays">Total Days</Label>
                            <motion.div whileFocus={{ scale: 1.02 }}>
                                <Input
                                    id="totalDays"
                                    type="number"
                                    min={1}
                                    value={totalDays}
                                    onChange={(e) => setTotalDays(Number(e.target.value))}
                                />
                            </motion.div>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="daysPresent">Days Present</Label>
                            <motion.div whileFocus={{ scale: 1.02 }}>
                                <Input
                                    id="daysPresent"
                                    type="number"
                                    min={0}
                                    max={totalDays}
                                    value={daysPresent}
                                    onChange={(e) => setDaysPresent(Number(e.target.value))}
                                />
                            </motion.div>
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <Label>Color</Label>
                        <div className="flex gap-2">
                            {colors.map((c) => (
                                <motion.div
                                    key={c}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-8 h-8 rounded-full cursor-pointer transition-all duration-200 ${color === c ? 'ring-2 ring-ring ring-offset-2' : ''}`}
                                    style={{ backgroundColor: c }}
                                    onClick={() => setColor(c)}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>

                <DialogFooter>
                    <Button variant="outline" onClick={() => onOpenChange(false)}>
                        Cancel
                    </Button>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button onClick={handleSave}>
                            Create Workplace
                        </Button>
                    </motion.div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default CreateWorkplaceDialog;